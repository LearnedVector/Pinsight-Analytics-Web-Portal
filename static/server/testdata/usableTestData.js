export const userTestData = {
  TotalUserData: {
    title: 'Total User',
    total: 112394,
    ChartData: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      series: [
        [1000, 1050, 1090, 1120, 1135, 1179, 1256]
      ]
    }
  },//end of TotalUserData
  NewUserData: {
    title: 'New Users',
    total: 256,
    ChartData: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      series: [
        [50, 50, 40, 30, 15, 44, 77]
      ]
    }
  },//end of New User data
  ActiveUserData: {
    title: 'Avg Active Users',
    total: 30000,
    ChartData: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      series: [
        [29000, 28000, 31000, 32000, 30000, 30000, 30000]
      ]
    }
  }
}

export const sessionTestData = {
  TotalSession: {
    title: 'Total Sessions',
    total: 1265938,
    ChartData: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      series: [
        [1812, 2139, 1000, 1234, 1134, 1544, 1941]
      ]
    }
  },
  SessionLength: {
    title: 'Session Length',
    total: ' ',
    ChartData: {
      labels: ['0-10 secs', '10-60 secs', '1-3 mins', '3-10 mins', '10-30 mins', '30-60 mins', '60+ mins'],
      series: [
        [123, 1323, 3123, 5342, 4212, 2321, 345]
      ]
    }
  }
}

export const eventsTestData = [
  {
    eventName: 'Home Button',
    total: 600,
    avgEventsDay: 90,
    avgEventsSesh: 10,
    eventsPerDay: {
      title: 'Events per Day',
      Chart: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        series: [100, 50, 50, 100, 200, 80, 120]
      }
    },
    eventsPerSession: {
      title: 'Events per Session',
      Chart: {
        labels: ['0-10 secs', '10-60 secs', '1-3 mins', '3-10 mins', '10-30 mins', '30-60 mins', '60+ mins'],
        series: [10, 40, 50, 100, 110, 120, 150]
      }
    }
  },
  {
    eventName: 'Settings Button',
    total: 200,
    avgEventsDay: 20,
    avgEventsSesh: 5,
    eventsPerDay: {
      title: 'Events per Day',
      Chart: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        series: [20, 30, 30, 20, 30, 40, 30]
      }
    },
    eventsPerSession: {
      title: 'Events per Session',
      Chart: {
        labels: ['0-10 secs', '10-60 secs', '1-3 mins', '3-10 mins', '10-30 mins', '30-60 mins', '60+ mins'],
        series: [1, 1, 18, 30, 50, 50, 50]

      }
    }
  },
  {
    eventName: 'Account Button',
    total: 200,
    avgEventsDay: 20,
    avgEventsSesh: 5,
    eventsPerDay: {
      title: 'Events per Day',
      Chart: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        series: [20, 30, 30, 20, 30, 40, 30]
      }
    },
    eventsPerSession: {
      title: 'Events per Session',
      Chart: {
        labels: ['0-10 secs', '10-60 secs', '1-3 mins', '3-10 mins', '10-30 mins', '30-60 mins', '60+ mins'],
        series: [1, 1, 18, 30, 50, 50, 50]
      }
    }
  },
  {
    eventName: 'Details Button',
    total: 3000,
    avgEventsDay: 300,
    avgEventsSesh: 150,
    eventsPerDay: {
      title: 'Events per Day',
      Chart: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        series: [500, 600, 400, 300, 200, 700, 300]
      }
    },
    eventsPerSession: {
      title: 'Events per Session',
      Chart: {
        labels: ['0-10 secs', '10-60 secs', '1-3 mins', '3-10 mins', '10-30 mins', '30-60 mins', '60+ mins'],
        series: [10, 100, 400, 500, 600, 390, 1000]
      }
    }
  },
  {
    eventName: 'Comment Submit Button',
    total: 100,
    avgEventsDay: 20,
    avgEventsSesh: 9,
    eventsPerDay: {
      title: 'Events per Day',
      Chart: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        series: [10, 15, 15, 10, 5, 5, 30]
      }
    },
    eventsPerSession: {
      title: 'Events per Session',
      Chart: {
        labels: ['0-10 secs', '10-60 secs', '1-3 mins', '3-10 mins', '10-30 mins', '30-60 mins', '60+ mins'],
        series: [5, 10, 15, 20, 20, 25, 25]
      }
    }
  },
  {
    eventName: 'Create New Thread Button',
    total: 70,
    avgEventsDay: 7,
    avgEventsSesh: 2,
    eventsPerDay: {
      title: 'Events per Day',
      Chart: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        series: [10, 10, 10, 10, 10, 10, 10]
      }
    },
    eventsPerSession: {
      title: 'Events per Session',
      Chart: {
        labels: ['0-10 secs', '10-60 secs', '1-3 mins', '3-10 mins', '10-30 mins', '30-60 mins', '60+ mins'],
        series: [0, 0, 5, 10, 10, 20, 25]
      }
    }
  },
  {
    eventName: 'Go to Map Button',
    total: 100,
    avgEventsDay: 13,
    avgEventsSesh: 5,
    eventsPerDay: {
      title: 'Events per Day',
      Chart: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        series: [10, 15, 15, 10, 5, 5, 30]
      }
    },
    eventsPerSession: {
      title: 'Events per Session',
      Chart: {
        labels: ['0-10 secs', '10-60 secs', '1-3 mins', '3-10 mins', '10-30 mins', '30-60 mins', '60+ mins'],
        series: [5, 10, 15, 20, 20, 25, 25]
      }
    }
  }
]

export const OverviewData = {
  Users: {
    TotalUsers: 112394,
    NewUsers: 256,
    NewUsersPercentLastWeekDifference: 10,
    isNewUsersMoreThenLastWeek: false,
    ActiveUsers: 30000,
    ActiveUsersPercentLastWeekDifference: 8,
    isActiveUsersMoreThenLastWeek: true,
    Sparklines: [10, 5, 6, 8, 9]
  },
  Sessions: {
    TotalSessions: 1123123,
    ThisWeeksSession: 10804,
    ThisWeeksSessesionPercentLastWeekDifference: 8,
    isThisWeeksSessesionMoreThenLastWeek: false,
    MostSessionOn: 'Wednesday',
    Sparklines: [4, 6, 10, 9, 8]
  },
  Events: {
    TotalEvents: 3014211,
    ThisWeekEvents: 4270,
    ThisWeekEventsPercentLastWeekDifference: 7,
    isThisWeekEventsMoreThenLastWeek: true,
    MostPopularEvent: 'Details Button',
    Sparklines: [3, 5, 6, 7, 8]
  }
}
