import { type JSX } from 'react'
import './CrudAlunos.css'

export default function CrudAlunos(): JSX.Element {
    return (
        <div className="crud-placeholder">
            {/*Futura Tabela*/}
                <div className="crud-box">
                    <div className="crud-header">Alunos</div>
                    <div className="crud-body">
                    <div className="row-placeholder">Aqui vai ficar a tabela dos mexicanos.</div>
                </div>
            </div>
        </div>
    )
}