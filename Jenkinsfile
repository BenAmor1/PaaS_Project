def commit_id
pipeline {
    agent any
    
    stages {
        stage ('preparation') {
            steps {
                checkout scm
                sh "git rev-parse HEAD > .git/commit-id"
                script {
                    commit_id = readFile('.git/commit-id').trim()
		    echo 'commit_id'
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
		sh 'docker tag images/restaurant 52.142.49.173:5000/restaurant:${commit_id}'
		echo 'tagging complete'
	    }
	}	
        stage ('push image to docker Repo') {
            steps {
                echo 'push image to local Repo'
                sh 'docker push 52.142.49.173:5000/restaurant:${commit_id}'
            }
        }
    }
}
