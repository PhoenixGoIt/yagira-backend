module.exports = ({ env }) => ({
    // Другие настройки плагинов, если есть
    'users-permissions': {
      config: {
        register: {
          allowedFields: ['name'], // Указываем, что поле name разрешено
        },
      },
    },
  });