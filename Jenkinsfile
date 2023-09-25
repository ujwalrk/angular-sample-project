pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
	stage('Run') {
            steps {
		sh 'export BUILD_ID=dontKillMePlease'
                sh 'pm2 restart server.js'
            }
        }
    }
}
