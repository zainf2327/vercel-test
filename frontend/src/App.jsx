import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://vercel-test-rust-tau.vercel.app')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
        setLoading(false)
        setData({ message: 'Error connecting to backend' })
      })
  }, [])

  return (
    <>
      <h1>Frontend + Backend Demo</h1>
      <div className="card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={{ textAlign: 'left', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Response from Backend:</h2>
            <p><strong>Message:</strong> {data?.message}</p>
            <p><strong>Time:</strong> {data?.timestamp}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
