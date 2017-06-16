module.exports = {
  server: {
    connections: {
      router: {
        stripTrailingSlash: true,
        isCaseSensitive: false
          },
          routes: {
              security: true
          }
      }
  },
  connections: [
      {
        port: 3000,
        labels: ['web']
      }
  ],
  registrations: [
      {
        plugin: {
          register: './routes',
          options: {
              uglify: true
          }
        }
      },
      {
        plugin: 'inert'
      }
  ]
};

