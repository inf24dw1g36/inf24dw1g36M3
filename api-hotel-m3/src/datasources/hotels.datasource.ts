import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'hotels',
  connector: 'mysql',
  url: 'mysql://root:secret@mysql/Hotels',
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: 'secret',
  database: 'Hotels'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class HotelsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'hotels';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.hotels', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
