import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem(environment.TOKEN_NAME);

  // Detectar si es FormData para NO modificar Content-Type
  const isFormData = req.body instanceof FormData;

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }) // ✅ solo agregar si no es FormData
      },
    });
    return next(cloned);
  }

  return next(req);
};
