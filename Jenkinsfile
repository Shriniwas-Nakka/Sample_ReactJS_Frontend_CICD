pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('package creation') { 
            steps { 
                sh ''' #!/bin/bash
                rsync -avzP -e 'ssh -i /demo-key.pem' /var/lib/jenkins/workspace/frontend-pipeline ubuntu@18.216.142.127:/home/ubuntu/
                echo ===> package creation on frontend server
                '''
            }
        }
        stage('Build') { 
            steps { 
                sh ''' #!/bin/bash
                ssh -i /demo-key.pem ubuntu@18.216.142.127 'sudo rm -rf /home/ubuntu/Sample_ReactJS_Frontend_CICD'
                ssh -i /demo-key.pem ubuntu@18.216.142.127 'mv /home/ubuntu/frontend-pipeline /home/ubuntu/Sample_ReactJS_Frontend_CICD'
                ssh -i /demo-key.pem ubuntu@18.216.142.127 'bash /home/ubuntu/buildJenkis.sh'
                echo ===> Build stage
                '''
            }
        }
        stage('Test') { 
            steps {
                sh 'echo test case runs' 
            }
        }
        stage('deploy') { 
            steps {
                sh ''' #!/bin/bash
                ssh -i /demo-key.pem ubuntu@18.216.142.127 'bash /home/ubuntu/deployJenkins.sh'
                echo ===> deploy stage
                '''
            }
        }
    }
}
