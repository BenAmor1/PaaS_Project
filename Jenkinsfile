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
    stage ('download and connect to AKS Cluster') {
        steps {
            sh 'sudo -u root az login -u mohamed.benamor.1@esprit.tn -p Beff@04834989'
            sh ' sudo -S az aks install-cli'
            sh 'sudo -S az aks get-credentials --resource-group prod-rg --name terraform-aks'
            echo 'connected'
        }
    }
    stage ('deploy image to AKS'){
        steps{
            sh 'kubectl apply -f deployment.yaml -S'
        }
    }
	}
}
