import { useState, type FormEvent } from 'react'
import { Button } from '../common/Button'
import { Icon } from '../common/Icon'
import './TrackingSearch.css'

interface Message {
  text: string
  error: boolean
}

export function TrackingSearch() {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState<Message | null>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = value.trim().toUpperCase()
    if (id.length < 6) {
      setMessage({ text: 'Please enter a valid tracking number (at least 6 characters).', error: true })
      return
    }
    // TODO: replace with a trackingService lookup once the API is ready.
    setMessage({ text: `Looking up shipment ${id}… live tracking is coming soon.`, error: false })
  }

  return (
    <div className="tracking-search">
      <form className="tracking" onSubmit={onSubmit} role="search">
        <label className="tracking__field">
          <Icon name="search" size={20} />
          <span className="sr-only">Tracking number</span>
          <input
            className="tracking__input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter tracking number"
            autoComplete="off"
          />
        </label>
        <Button type="submit" size="lg">
          Track
        </Button>
      </form>
      {message && (
        <p className={`tracking__message${message.error ? ' tracking__message--error' : ''}`} role="status">
          {message.text}
        </p>
      )}
    </div>
  )
}
