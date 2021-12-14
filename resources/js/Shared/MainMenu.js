import React from 'react';
import MainMenuItem from '@/Shared/MainMenuItem';

export default ({ className }) => {
  return (
    <div className={className}>
      <MainMenuItem text="داشبرد" link="dashboard" icon="dashboard" />
      <MainMenuItem text="سازمان" link="organizations" icon="office" />
      <MainMenuItem text="ارتباطات" link="contacts" icon="users" />
      <MainMenuItem text="گزارش ها" link="reports" icon="printer" />
    </div>
  );
};
