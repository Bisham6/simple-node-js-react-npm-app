pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                script {
                    // Run the npm install command
                    sh 'npm install'
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    // Run the test script
                    sh './jenkins/scripts/test.sh'
                }
            }
        }
    }
}
