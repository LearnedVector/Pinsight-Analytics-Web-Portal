export const testUserQueries = `{
  UserData{
    TotalUser{
      title,
      total,
      Chart{
        labels,
        series
      }
    },
    NewUserData{
      title,
      total,
      Chart{
        labels,
        series
      }
    },
    ActiveUserData{
      title,
      total,
      Chart{
        labels,
        series
      }
    }
  }
}`

export const testSessionQueries = `{
  SessionData {
    TotalSession {
      title
      total
      Chart {
        labels
        series
      }
    },
    SessionLength {
      title
      total
      Chart {
        labels
        series
      }
    }
  }
}`
