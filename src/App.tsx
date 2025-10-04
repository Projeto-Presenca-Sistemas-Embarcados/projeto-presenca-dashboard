import { useState, type JSX } from 'react';
import LateralBar from './components/LateralBar/LateralBar.tsx'
import PortalDashboard from './components/PortalDashboard/PortalDashboard'
import FrequenciaDashboard from './components/FrequenciaDashboard/FrequenciaDashboard'

export type Dashboard = 'portal' | 'frequencia'

export default function App(): JSX.Element {
  const [active, setActive] = useState<Dashboard>('portal')

  return (
    <div className="app-root">
      <LateralBar active={active} onSelect={(d) => setActive(d)} />
      <div className="content-area">
        {active === 'portal' ? <PortalDashboard /> : <FrequenciaDashboard />}
      </div>
    </div>
  )
}