import { expect } from 'chai';
import { EmailService, ShortMessageService, Notifier } from '../src/ejercicio-5';

describe('EmailService', () => {
  it('should send email notification', () => {
    const emailService = new EmailService();
    const consoleOutput: string[] = [];
    
    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    emailService.notify('Test message');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by email: Test message']);
  });
  it('should send email notification', () => {
    const emailService = new EmailService();
    const consoleOutput: string[] = [];
    
    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    emailService.notify('Holis');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by email: Holis']);
  });
  it('should send email notification', () => {
    const emailService = new EmailService();
    const consoleOutput: string[] = [];
    
    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    emailService.notify('Hola buenas tardes');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by email: Hola buenas tardes']);
  });
  it('should send email notification', () => {
    const emailService = new EmailService();
    const consoleOutput: string[] = [];
    
    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    emailService.notify('Hola buenas, queria comprar algo');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by email: Hola buenas, queria comprar algo']);
  });
});

describe('ShortMessageService', () => {
  it('should send SMS notification', () => {
    const smsService = new ShortMessageService();
    const consoleOutput: string[] = [];

    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    smsService.notify('SuperCalifragilisYcuestilaridoso');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by SMS: SuperCalifragilisYcuestilaridoso']);
  });
  it('should send SMS notification', () => {
    const smsService = new ShortMessageService();
    const consoleOutput: string[] = [];

    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    smsService.notify('si');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by SMS: si']);
  });
  it('should send SMS notification', () => {
    const smsService = new ShortMessageService();
    const consoleOutput: string[] = [];

    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    smsService.notify('Hoy he ido al parque');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by SMS: Hoy he ido al parque']);
  });
  it('should send SMS notification', () => {
    const smsService = new ShortMessageService();
    const consoleOutput: string[] = [];

    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    smsService.notify('Hola');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by SMS: Hola']);
  });
});

describe('Notifier', () => {
  it('should notify using EmailService', () => {
    const emailNotifier = new Notifier(new EmailService());
    const consoleOutput: string[] = [];

    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    emailNotifier.sendNotification('Hello World!');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by email: Hello World!']);
  });

  it('should notify using ShortMessageService', () => {
    const smsNotifier = new Notifier(new ShortMessageService());
    const consoleOutput: string[] = [];

    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    smsNotifier.sendNotification('Hello World!');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by SMS: Hello World!']);
  });
  it('should notify using EmailService', () => {
    const emailNotifier = new Notifier(new EmailService());
    const consoleOutput: string[] = [];

    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    emailNotifier.sendNotification('Hola banana');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by email: Hola banana']);
  });

  it('should notify using ShortMessageService', () => {
    const smsNotifier = new Notifier(new ShortMessageService());
    const consoleOutput: string[] = [];

    // Replace console.log temporarily to capture the output
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleOutput.push(message);
    };

    smsNotifier.sendNotification('Adios Banana');

    // Restore console.log
    console.log = originalLog;

    expect(consoleOutput).to.deep.equal(['Sending notification by SMS: Adios Banana']);
  });
});
