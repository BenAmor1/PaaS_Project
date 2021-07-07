def commit_id
pipeline {
    agent none
    stages {
        stage ('preparation') {
		    agent {
			    node {
			        label 'master'
			    }
			}
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
		 agent {
			    node {
			        label 'master'
			    }
			}
            steps {
                echo 'Building Image ...'
                sh 'docker build -t images/restaurant .'
                echo 'Build Complete'
            }
        }
        stage ('Tag Images') {
		 agent {
			    node {
			        label 'master'
			    }
			}
			when {
			   expression {
			           env.GIT_BRANCH == 'developper'
			   }
			}
            steps {
                echo 'Tagging Image ...'
                sh 'docker tag images/restaurant 52.142.49.173:5000/restaurant:${GIT_COMMIT}'
                echo 'tagging complete'
            }
        }
        stage ('push image to docker Repo') {
		 agent {
			    node {
			        label 'master'
			    }
			}
			when {
			   expression {
			           env.GIT_BRANCH == 'developper'
			   }
			}
            steps {
                echo 'push image to local Repo'
                sh 'docker push 52.142.49.173:5000/restaurant:${GIT_COMMIT}'
            }
        }
        stage ('delete all local image'){
		 agent {
			    node {
			        label 'master'
			    }
			}
            steps {
            echo 'delete all local image'
            sh 'docker rmi $(docker images -q) -f'
            echo ' all images are deleted'
            }
        }
		stage ('delete and kill last Images'){
             agent {
                node {
                   label 'JenkinsSlave'
                }
            }
            steps {
                echo ('delete and kill last Images')
                sh 'docker kill angular-app'
                sh 'docker rm angular-app '
            }
        }
        stage ('run docker container on remote agent'){
		     agent {
			       node {
			          label 'JenkinsSlave'
			       }
			    }
			when {
			   expression {
			           env.GIT_BRANCH == 'developper'
			   }
			}
            steps {
                sh 'docker run -d -it -p 80:80/tcp --name angular-app  52.142.49.173:5000/restaurant:${GIT_COMMIT}'
			}
		}
}
}
