pipeline {
    agent any
    stages {
        stage ('preparation') {
            steps {
                checkout scm
                sh "git rev-parse HEAD > .git/commit-id"
                script {
                    commit_id = readFile('.git/commit-id').trim()
                    echo "${commit_id}"
                }
            }
        }    
		stage ('Image Build') {
            steps {
                echo 'Building Image ...'
                sh 'docker build -t images/restaurant .'
                echo 'Build Complete'
            }
        }
		stage ('Tag Images') {
            steps {
                echo 'Tagging Image ...'
                sh 'docker tag images/restaurant paasrepo.azurecr.io/paasrepo:${GIT_COMMIT}'
                echo 'tagging complete'
            }
        }
		stage ('push image to ACR') {
            steps {
			    echo 'connection to ACR'
				sh ' sudo -S az acr login --name paasrepo'
                echo 'push image to ACR'
                sh 'docker push paasrepo.azurecr.io/paasrepo:${GIT_COMMIT}'
				echo 'images pushed'
            }
        }
		stage ('delete all local image'){
            steps {
            echo 'delete all local image'
            sh 'docker rmi $(docker images -q) -f'
            echo ' all images are deleted'
            }
        }
        stage ('download and connect to AKS Cluster') {
            steps {
				echo 'connection to AKS'
                sh 'sudo -S az login -u mohamed.benamor.1@esprit.tn -p Beff@04834989'
                sh ' sudo -S az aks install-cli'
                sh 'sudo -S az aks get-credentials --resource-group prod-rg --name terraform-aks'
                echo 'connected'
            }
       }
       stage ('deploy image to AKS'){
            steps{
                sh 'sudo -S kubectl apply -f deployment.yaml '
            }
       }
	}
}
