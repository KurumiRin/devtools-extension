import Button from './components/Button';
import FieldInfo from './components/FieldInfo';
import FormIdSelector from './components/FormIdSelector';
import FormState from './components/FormState';
import Input from './components/Input';
import styles from './styles/Devtools.module.css';
import './styles/global.css';
import React from 'react';

const Devtools: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.topButtonGroup}>
          <Button className={styles.topButton}>♺ UPDATE</Button>
          <Button className={styles.topButton}>[+] EXPAND</Button>
        </div>
        <FormIdSelector ids={['id-001', 'id-002', 'id-003']} />
        <Input placeholder="Filter name..." />
      </div>
      <div className={styles.middle}>
        <FieldInfo
          name="field1"
          hasError={false}
          isNative
          info={{ type: 'text', touched: true, nestedObject: { lol: 'olo' } }}
        />
        <FieldInfo
          name="field2"
          hasError
          isNative={false}
          info={{ touched: true, dirty: true }}
        />
      </div>
      <div>
        <FormState
          state={{ valid: false, submitted: false, count: 1, errors: 0 }}
        />
      </div>
    </div>
  );
};

export default Devtools;
