const PROXY_CONFIG = [
  {
      context: [
          "/cargo",
          "/perfil",
          "/pessoa",
          "/usuario"
      ],
      target: "http://localhost:8080",
      secure: false
  }
]

module.exports = PROXY_CONFIG;
