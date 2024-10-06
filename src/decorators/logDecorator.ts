// decorators/logDecorator.ts
export function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      console.log(`Method ${propertyKey} was called with arguments: ${JSON.stringify(args)}`);
      return originalMethod.apply(this, args);
    };
  
    return descriptor;
  }
  