<?php

class m140903_160352_messages extends CDbMigration
{
	public function up()
	{
        $this->createTable('messages', array(
            'id' => 'pk',
            'username' => 'varchar(255) NOT NULL',
            'email' => 'varchar(255)',
            'text' => 'text NOT NULL',
        ),'ENGINE=InnoDB CHARSET=utf8');
	}

	public function down()
	{
        $this->dropTable('messages');
	}

	/*
	// Use safeUp/safeDown to do migration with transaction
	public function safeUp()
	{
	}

	public function safeDown()
	{
	}
	*/
}