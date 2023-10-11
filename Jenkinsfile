pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        /*
        stage('Test') {
            steps {
                sh 'docker build -t angular-test .'
                sh 'docker run --rm angular-test'
            }
        }
        */
        stage('Run') {
            steps {
                sh './start.sh'
            }
        }
    }
}

