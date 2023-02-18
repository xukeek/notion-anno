import { type NextPage } from 'next';
import { type FunctionComponent, type PropsWithChildren, Fragment } from 'react';
import type { UnknownProps } from '@/types/Props';

import Head from '@/modules/shared/components/base/Head';
import { SITE_NAME } from '@/configs/env';

export interface LayoutConfigProps {
  title: string;
}

export const MainLayoutHead: FunctionComponent<PropsWithChildren<LayoutConfigProps>> = (props) => {
  const {
    children,
    title: titleProps
  } = props;

  const title = titleProps?.includes(SITE_NAME) ? titleProps : `${titleProps} | ${SITE_NAME}`;

  return (
    <Fragment>
      <Head title={title} />
      {children}
    </Fragment>
  );
};

/**
 * Higher-order component that wraps the provided component in a `<MainLayoutPage>` component.
 * Of course, you can create your new Layout with this template!
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withMainLayoutHead = <T extends UnknownProps>(
  PageComponent: NextPage<T>, layoutProps: LayoutConfigProps|((pageProps: T) => LayoutConfigProps)
) => {
  const LayoutPage: FunctionComponent<T> = (pageProps) => {
    const layoutPropsWithPageProps = typeof layoutProps === 'function'
      ? layoutProps(pageProps) : layoutProps;

    return (
      <MainLayoutHead {...layoutPropsWithPageProps}>
        <PageComponent {...pageProps} />
      </MainLayoutHead>
    );
  };
  return LayoutPage;
};

export default MainLayoutHead;
