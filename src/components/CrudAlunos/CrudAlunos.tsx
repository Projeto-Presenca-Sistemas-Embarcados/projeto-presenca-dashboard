import { useEffect, useState } from 'react'
import type { JSX } from 'react'
import './CrudAlunos.css'

// Interface para representar um aluno
interface Student {
  id: number
  name: string
  tagId: string
  startTime?: string
  attendancesCount?: number
}

export default function CrudAlunos(): JSX.Element {
  // Estados para o site.
  const [alunos, setAlunos] = useState<Student[]>([]) // Alunos
  const [loading, setLoading] = useState<boolean>(true) // Carregamento do componente
  const [error, setError] = useState<string | null>(null) // Mensagens de Erro

  useEffect(() => {
    // Função que busca os dados do backend
    const fetchAlunos = async () => {
      try {

        // Buscar todos os alunos
        const alunosRes = await fetch('http://localhost:3000/students')
        if (!alunosRes.ok) throw new Error('Erro ao buscar alunos')
        const alunosData: Student[] = await alunosRes.json() 

        // Buscar todas as aulas - É necessário para pegar as attendences por aluno
        const lessonsRes = await fetch('http://localhost:3000/lessons')
        if (!lessonsRes.ok) throw new Error('Erro ao buscar aulas')
        const lessonsData: { id: number }[] = await lessonsRes.json()

        // Objeto para armazenar a contagem de presenças de cada aluno
        const attendancesByStudent: Record<number, number> = {}

        // Para cada aula, buscar os alunos presentes
        for (const lesson of lessonsData) {
          const res = await fetch(`http://localhost:3000/lessons/${lesson.id}/students`)
          if (!res.ok) continue
          const studentsInLesson = await res.json()
          
          // Contagem de presenças por aluno.
          studentsInLesson.forEach((ls: any) => {
            const studentId = ls.student.id
            if (!attendancesByStudent[studentId]) attendancesByStudent[studentId] = 0
            if (ls.present) attendancesByStudent[studentId] += 1
          })
        }

        // Mapear os alunos originais adicionando a contagem de presenças
        const alunosWithAttendance = alunosData.map(aluno => ({
          ...aluno, 
          attendancesCount: attendancesByStudent[aluno.id] || 0, // Adiciona contagem ou 0 se não houver
        }))

        // Atualiza o estado dos alunos com a contagem de presenças
        setAlunos(alunosWithAttendance)
      } 
      catch (err: any) {
        setError(err.message)
      } 
      finally {
        setLoading(false)
      }
    }

    fetchAlunos()
  }, []) // Executa apenas uma vez ao montar o componente

  if (loading) return <div>Carregando alunos...</div> // Interface de Carregamento
  if (error) return <div>Erro: {error}</div> // Interface de Erro
  
  // Interface Principal
  return (
    <div className="crud-placeholder">
      <div className="crud-box">
        <div className="crud-header">Alunos</div>
        <div className="crud-body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Tag ID</th>
                <th>Presenças</th> {}
              </tr>
            </thead>
            <tbody>
              {alunos.map(aluno => (
                <tr key={aluno.id}>
                  <td>{aluno.id}</td>
                  <td>{aluno.name}</td>
                  <td>{aluno.tagId}</td>
                  <td>{aluno.attendancesCount}</td> {}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
