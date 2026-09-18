import type { RequestStatus } from '../types/api'

type StatusMessageProps = {
  status: RequestStatus
  onRetry: () => void
}

function StatusMessage({ status, onRetry }: StatusMessageProps) {
  if (status === 'loading') return <p>Cargando...</p>

  if (status === 'error') {
    return (
      <>
        <p>Ocurrió un error al cargar los datos.</p>
        <button onClick={onRetry}>Reintentar</button>
      </>
    )
  }

  if (status === 'empty') return <p>No hay resultados.</p>

  return null
}

export default StatusMessage