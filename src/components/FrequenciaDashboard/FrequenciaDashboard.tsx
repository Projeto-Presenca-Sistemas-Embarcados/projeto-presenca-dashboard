import { type JSX } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import IconUva from '../IconUva/IconUva'
import CrudAlunos from '../CrudAlunos/CrudAlunos'
import './FrequenciaDashboard.css'


export default function FrequenciaDashboard(): JSX.Element {
    return (
        <section className="frequencia-dashboard">
            <header className="freq-header">
                <SearchBar placeholder="" />
                <div className="freq-top-right">
                    <IconUva />
                </div>
            </header>

            <div className="freq-title">Frequência dos Mexicanos</div>

            <div className="freq-panel">
                <CrudAlunos />
            </div>
        </section>
    )
}