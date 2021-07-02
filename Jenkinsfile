def commit_id
pipeline {
    agent any
    
    stages {
        stage ('preparation') {
            steps {
                checkout scm
                sh "git rev-parse --short HEAD > .git/commit-id"
                script {
                    commit_id = readFile('.git/commit-id').trim()
                }
            }
        }
        stage ('Image Build') {
            steps {
                echo 'Building Image ...'
                sh 'docker build -t 52.142.49.173:5000/restaurant-image:${commit_id} .'
                echo 'Build Complete'
            }
        }
        stage ('push image to docker Repo') {
            steps {
                echo 'push image to local Repo'
                sh 'docker push 52.142.49.173:5000/restaurant-image:${commit_id}'
            }
        }
    }
}
