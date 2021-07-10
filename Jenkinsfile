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
      stage('test') {
            steps{
              sh 'kubectl get node'
            } 
      }
    stage ('download and connect to AKS Cluster') {
        steps {
            sh 'az login -u mohamed.benamor.1@esprit.tn -p Beff@04834989'
            echo 'downloanding aks CLi '
            sh 'az aks install-cli'
            echo ' connecting to AKS cluster'
            sh ' az aks get-credentials --resource-group prod-rg --name terraform-aks'
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
