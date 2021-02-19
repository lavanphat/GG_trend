import AdminBroExpress from '@admin-bro/express';
import AdminBroSequelize from '@admin-bro/sequelize';
import AdminBro, { ACTIONS } from 'admin-bro';
import db from '../../models/init-models';
import { handlerDelete } from './handlerDelete';

AdminBro.registerAdapter(AdminBroSequelize);

ACTIONS.edit.before = async (request: any) => {
  // tslint:disable-next-line:no-console
  request.payload = {
    ...request.payload,
    UpdatedAt: Date.now()
  };
  return request;
};

const adminBro: AdminBro = new AdminBro({
  rootPath: '/',
  resources: [
    {
      resource: db.Keyword,
      options: {
        editProperties: ['Query', 'Link', 'Value', 'TopicId', 'Status'],
        navigation: {
          name: 'Table'
        },
        sort: {
          direction: 'desc',
          sortBy: 'CreatedAt'
        },
        actions: {
          delete: handlerDelete
        }
      }
    },
    {
      resource: db.Topic,
      options: {
        editProperties: ['Name', 'Keyword', 'Status'],
        navigation: {
          name: 'Table'
        },
        sort: {
          direction: 'desc',
          sortBy: 'CreatedAt'
        },
        actions: {
          delete: {
            handler: handlerDelete
          }
        },
        listProperties: [
          'Name',
          'Keyword',
          'Status',
          'CreatedAt',
          'UpdatedAt',
          'DeletedAt'
        ]
      }
    }
  ],
  // dashboard: {
  //   component: AdminBro.bundle('./component/dashboard')
  // },
  dashboard: {
    component: AdminBro.bundle('./components/dashboard/index')
  }
});

export const rootPath: string = adminBro.options.rootPath;
export const router: any = AdminBroExpress.buildRouter(adminBro);
// export const router: any = AdminBroExpress.buildAuthenticatedRouter(
//   adminBro,
//   {
//     authenticate: (email: string, password: string) => {
//       if (
//         email === process.env.USERNAME_ADMIN &&
//         password === process.env.PASSWORD_ADMIN
//       ) {
//         return true;
//       }
//       return null;
//     },
//     cookieName: 'adminbro',
//     cookiePassword: 'somePassword'
//   },
//   undefined,
//   { resave: true, saveUninitialized: false, secret: 'adminbro' }
// );
