//rcc
import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

  render() {
    return (
      //.flex.flex-column(os flilhos da div ficarao um em cima do outro)
      <div className="flex flex-column">
        {/*span.p-inupt-icon-left.w-full*/}
        <span className="p-input-icon-left w-full">
            {/* i.pi.pi-search*/}
            <i className="pi pi-search"></i>
            <InputText 
                className='w-full'
                //Cada vez que escrever um texto ele sera alterado
                onChange={this.onTermoAlterado}
                placeholder={this.props.dica} />
        </span>
      </div>
    )
  }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver...'
}
