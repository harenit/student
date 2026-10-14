pipeline{
    agent any
    stages{
        stage('installation'){
            steps{
                bat 'npm install'

            }
        }
        stage('build'){
            steps{
                bat 'npm run build'
            }
        }
    }
}