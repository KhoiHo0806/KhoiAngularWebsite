import { CanActivateFn, Router } from '@angular/router';
import { inject} from '@angular/core';
import { DataService } from './service/data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const dataService = inject(DataService)

  if(dataService.getLoginState()){
    return true;
  }else{
    router.navigate([""]);
    return false;
  }
};
