openssl req \
  -newkey rsa:4096 -nodes -sha256 -keyout certs/domain.key \
  -addext "subjectAltName = IP: 20.102.59.82" \
  -x509 -days 365 -out certs/domain.crt
  
  
  
  
  docker run -d \
  -p 5000:5000 \
  --restart=always \
  --name registry \
  -v "$(pwd)"/certs:/certs \
  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \
  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \
  registry:2
  
  
  
  
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
    stage ('download and connect to AKS Cluster') {
        steps {
            echo 'downloanding aks CLi '
            sh 'az aks install-cli'
            echo ' downloading finish'
            echo ' connecting to AKS cluster'
            sh 'az aks get-credentials --resource-group prod-rg --name terraform-aks'
            echo 'connected'
        }
    }
    stage ('deploy image to AKS'){
        steps{
            sh 'kubectl apply -f deployment.yaml'
        }
    }
	}
}
