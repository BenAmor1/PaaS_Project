def commit_id
def remote = [:]
remote.name = 'myvm'
remote.host = '52.142.49.173'
remote.user = 'benamor'
remote.password = 'Cisco123'
remote.allowAnyHosts = true
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
                sh 'docker tag images/restaurant 52.142.49.173:5000/restaurant:${GIT_COMMIT}'
                echo 'tagging complete'
            }
        }
        stage ('push image to docker Repo') {
            steps {
                echo 'push image to local Repo'
                sh 'docker push 52.142.49.173:5000/restaurant:${GIT_COMMIT}'
            }
        }
        stage ('delete all local image'){
            steps {
            echo 'delete all local image'
            sh 'docker rmi $(docker images -q) -f'
            echo ' all images are deleted'
            }
        }
        stage ('remote SSH Agent'){
	    steps {
            sshCommand remote: remote, command: 'sudo -i'
            sshCommand remote: remote, command: 'docker run -d -it -p 80:80/tcp --name angular-app  52.142.49.173:5000/restaurant:${GIT_COMMIT}'
            }        
        }
    }
}
