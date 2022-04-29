import { CarouselComponent } from '@shared/components/carousel/carousel.component';
import { CardUserComponent } from './cards/card-user/card-user.component';
import { CardLoaderComponent } from './loaders/card-loader/card-loader.component';
import { TitleH1Component } from './titles/title-h1/title-h1.component';

export const components: any[] = [
    CardUserComponent,
    CarouselComponent,
    TitleH1Component,
    //Loaders
    CardLoaderComponent
]

// export all components
export * from './cards/card-user/card-user.component';
export * from './carousel/carousel.component';
export * from './titles/title-h1/title-h1.component';
export * from './loaders/card-loader/card-loader.component';
