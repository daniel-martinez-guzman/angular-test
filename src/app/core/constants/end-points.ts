export class EndPoints {
  private constructor() {}

  readonly basePathApi: string = 'http://localhost/drupal-10.1.2/API';
  static instance: EndPoints = new EndPoints();
  static readonly formsEndPoints = '/formulario';

  buildUrl(endPoint: string): string {
    return this.basePathApi + endPoint;
  }
}
