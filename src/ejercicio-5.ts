// Interfaz que define el servicio de notificación
/**
 * @param {string} message
 * @interface NotificationService
 * @returns {string}
 * @export NotificationService

 */
interface NotificationService {
  notify(message: string): void;
}

/**
 * @param {string} message
 * @interface NotificationService
 * @returns {string}
 * @export NotificationService
 */

// Clase que permite enviar notificaciones por correo electrónico
export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/***
 * @param {string} message
 * @interface EmailService
 * @returns {string}
 * @export EmailService
 */
// Clase que permite enviar notificaciones por SMS
export class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/***
 * @param {string} message
 * @interface ShortMessageService
 * @returns {string}
 * @export ShortMessageService
 */
// Clase que hace uso de diferentes tipos de servicios para realizar notificaciones
export class Notifier {
  constructor(private notificationService: NotificationService) {
  }

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Código del cliente
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
