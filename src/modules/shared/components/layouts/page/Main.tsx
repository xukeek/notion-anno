import { type FunctionComponent, type PropsWithChildren, Fragment } from 'react';
import type { UnknownProps } from '@/types/Props';
import clsxm from '@/modules/shared/utils/clsxm';

export interface LayoutConfigProps {
  className?: string;
}

export const MainLayoutPage: FunctionComponent<PropsWithChildren<LayoutConfigProps>> = (props) => {
  const {
    children,
    className
  } = props;

  return (
    <Fragment>
      <div className={clsxm(['flex flex-col min-h-screen', className])}>
        {children}
      </div>
    </Fragment>
  );
};

/**
 * @param LayoutComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withMainLayoutPage = <T extends UnknownProps>(
  LayoutComponent: FunctionComponent<T>, layoutProps?: LayoutConfigProps|((pageProps: T) => LayoutConfigProps)
) => {
  const LayoutPage: FunctionComponent<T> = (pageProps) => {
    const layoutPropsWithPageProps = typeof layoutProps === 'function'
      ? layoutProps(pageProps) : layoutProps;

    return (
      <MainLayoutPage {...layoutPropsWithPageProps}>
        <LayoutComponent {...pageProps} />
      </MainLayoutPage>
    );
  };
  return LayoutPage;
};

export default MainLayoutPage;
