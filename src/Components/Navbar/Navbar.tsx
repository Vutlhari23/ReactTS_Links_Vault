import React from 'react';
import { Text } from '../Text/Text';
import styles from './Navbar.module.css';
import { ContentContainer } from '../ContentContainer/ContentContainer';
import { Button } from '../Button/Button';

type NavbarProps = {
    showAddForm: () => void;
};

export const Navbar = ({ showAddForm }: NavbarProps) => {
    return (
        <nav>
            <ContentContainer className={styles["nav-content"]}>
                <Text variant="h2">LinkVault</Text>

                <div className={styles.links}>
                    <Button action={showAddForm}>
                        Add New Link
                    </Button>
                </div>
            </ContentContainer>
        </nav>
    );
};