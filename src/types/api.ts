export type Location = {
  status: 'success' | 'fail'
  message?: string
  query: string
  country: string
  city: string
  regionName: string
  timezone: string
}

export type RequestStatus = 'loading' | 'error' | 'empty' | 'success'