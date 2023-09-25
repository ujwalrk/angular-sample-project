pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'docker build -t angular-test .'
		sh 'docker run --rm angular-test'
            }
        }
	stage('Run') {
            steps {
		sh 'export BUILD_ID=dontKillMePlease'
                sh 'pm2 --name HelloWorld start npm -- start'
            }
        }
    }
}
