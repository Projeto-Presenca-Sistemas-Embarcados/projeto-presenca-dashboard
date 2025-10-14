import type { Dashboard } from '../../App'
import './LateralBar.css'
import avatar from '../../assets/avatar.png'

interface Props {
    active: Dashboard
    onSelect: (d: Dashboard) => void
}

export default function LateralBar({ active, onSelect }: Props) {
    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <div className="avatar-circle" aria-hidden>
                    <img src={avatar} alt="Avatar do usuário" />
                </div>
                <div className="sidebar-title">Minhas turmas</div>
            </div>

            <nav className="sidebar-nav">
                <button className={`nav-btn ${active === 'portal' ? 'active' : ''}`} onClick={() => onSelect('portal')}>
                    Portal
                </button>


                <button className={`nav-btn ${active === 'frequencia' ? 'active' : ''}`} onClick={() => onSelect('frequencia')}>
                    Frequência dos Alunos
                </button>
            </nav>
        </aside>
    )
}