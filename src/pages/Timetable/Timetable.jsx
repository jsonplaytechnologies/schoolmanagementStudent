const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '1rem'
  },
  subtitle: {
    color: '#4b5563'
  }
}

export default function Timetable() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Emploi du temps</h1>
        <p style={styles.subtitle}>Votre emploi du temps hebdomadaire et mensuel.</p>
      </div>
    </div>
  )
}