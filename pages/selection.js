import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import Link from "next/link";
import styles from '../styles/Selection.module.css'

export default function Selection(){
    return(
        <div className={styles.bg}>
            <div className={styles.container}>
                <Row type="flex" gutter={3} className={styles.row} align="middle">
                    <Col span={6} align="middle" className={styles.col}>
                    <Link href="/tour">
                    <Button className={styles.btn}><p>Virtual Tour</p></Button>
                    </Link>
                    </Col>
                    <Col span={6} align="middle" className={styles.col}>
                    <Button className={styles.btn}><p>Gedung A</p></Button>
                    </Col>
                    <Col span={6} align="middle" className={styles.col}>
                    <Button className={styles.btn}><p>Gedung B</p></Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}