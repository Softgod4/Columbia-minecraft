import styles from '@/app/css/developer/Wiki.module.css'

export default function Wiki() {
    return (
        <section>
            <div className="container flex flex-col justify-center items-center">
                <img src="/big-icon.png" alt="" />
                <h2 className="h2_title mt-12 mb-24">Вики находится в разработке</h2>

                <div>
                    <h2 className="h2_title mb-4">Поддержать разработчика:</h2>

                        <p className={styles.sber}>Сбер: 2202 2036 5280 0865 (Александр Б.)</p>
                        <p className={styles.tinkoff}>Тинькофф: 2200 7004 9726 5388 (Александр Б.)</p>
                </div>
            </div>
        </section>
    )
}