import type { NextPage } from 'next';
import type { FunctionComponent } from 'react';
import type { UnknownProps } from '@/types/Props';
import clsxm from '@/modules/shared/utils/clsxm';
import { MainLayoutPage, LayoutConfigProps } from './Main';

interface MobileLayoutConfigProps extends LayoutConfigProps {
  classNameMobile?: string;
}

/**
 * @param LayoutComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withMobileLayoutPage = <T extends UnknownProps>(LayoutComponent: NextPage<T>, layoutProps?: MobileLayoutConfigProps|((pageProps: T) => MobileLayoutConfigProps)) => {
  const MobileLayoutPage: FunctionComponent<T> = (pageProps) => {
    const layoutPropsWithPageProps = typeof layoutProps === 'function'
      ? layoutProps(pageProps) : layoutProps;

    const {
      classNameMobile
    } = layoutPropsWithPageProps;

    return (
      <MainLayoutPage {...layoutPropsWithPageProps}>
        <div
          className={clsxm([
            'relative max-w-[500px] mx-auto w-full flex flex-col min-h-screen shadow-xl',
            classNameMobile
          ])}
        >
          <LayoutComponent {...pageProps} />
        </div>
      </MainLayoutPage>
    );
  };
  return MobileLayoutPage;
};
