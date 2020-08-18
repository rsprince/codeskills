import { 
    trigger,
    state, 
    animate, 
    transition, 
    style, 
    query, 
    stagger 
  } from '@angular/animations'; 
  
  export const routeAnimation = trigger('routeAnimation', [ 
		transition('* => Home', [  
      // enter route 
      query( 
        ':self', 
        [ 
          // start 
          style({ opacity: 0 }), 
          // end 
          animate('1.0s ease', style({ opacity: 1 })) 
        ], 
        { optional: true } 
      ) 
		]),
		transition('* => *', [  
      // enter route 
      query( 
        ':self', 
        [ 
          // start 
          style({ opacity: 0, transform: 'translateY(5%)' }), 
          // end 
          animate('1.0s ease', style({ opacity: 1, transform: 'translateY(0%)' })) 
        ], 
        { optional: true } 
      ) 
		])		
		 
  ]); 
 