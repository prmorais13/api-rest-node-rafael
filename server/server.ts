import App from './App' 

App.app.listen(3000, () => {
  console.log('Servidor on')
})

process.once('SIGUSR2', () => 
  App.dataBaseCloseConnection('nodemon restart', () => 
    process.kill(process.pid, 'SIGUSR2')
  )
)

process.on('SIGINT', () =>
  App.dataBaseCloseConnection('Execução interrompida', () =>
    process.exit(0)
  )
)