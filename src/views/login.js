import React from 'react'

import Card from '../components/card'
import Formgroup from '../components/formgroup'

class Login extends React.Component{

    state = {
        email:"",
        senha:""
    }

    login = () =>{
        console.log('Email :', this.state.email)
        console.log('Senha :', this.state.senha)
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative',left: '300px'}}>
                        <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <Formgroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email"></input>
                                            </Formgroup>
                                            <Formgroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password" value={this.state.senha} onChange={e => this.setState({senha: e.target.value})} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                            </Formgroup>

                                            <button onClick={this.login} type="button" className="btn btn-success">Entrar</button>
                                            {/* <button onClick="window.location.href='usuarios.html'" type="button" className="btn btn-danger">Cadastrar</button> */}
  
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login