import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn, OneToMany } from 'typeorm';
import User from './user.entity';

@ObjectType()
@Entity({ name: 'messages' })
export default class Message {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ name: 'user_id' })
    userId: number;

    @Field()
    @Column()
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Field(() => User)
    user: User;

    @ManyToMany(
        () => User,
        user => user.messageConnection,
        { primary: true },
    )
    @JoinColumn({ name: 'user_id' })
    userConnection: Promise<User>;
}