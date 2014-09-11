<?php

class MessageController extends Controller
{
	/**
	 * @var string the default layout for the views. Defaults to '//layouts/column2', meaning
	 * using two-column layout. See 'protected/views/layouts/column2.php'.
	 */
	public $layout='//layouts/main';


	/**
	 * Creates a new model.
	 * If creation is successful, the browser will be redirected to the 'view' page.
	 */
	public function actionCreate()
	{
		$model=new Message;
		if(isset($_POST))
		{
			$model->attributes=$_POST;
			if($model->save())
				echo CJSON::encode(array('status'=>'ok'));
		}
	}

	/**
	 * Lists all models.
	 */
	public function actionIndex()
	{
		$this->render('index');
	}

    public function actionGetModelsByPage($page)
    {
        $pageSize = Yii::app()->params->countMessagesOnPage;

        $criteria = new CDbCriteria;
        $criteria->order = "id DESC";

        $dataProvider=new CActiveDataProvider('Message', array(
                'pagination'=>array(
                    'pageSize'=>$pageSize,
                    'currentPage' => $page - 1,
                ),
                'criteria'=>$criteria,
            )
        );

        echo(CJSON::encode(array(
                    'messages' => $dataProvider->data,
                    'pagination' => array(
                        'currentPage' => $page,
                        'countPages' => ceil($dataProvider->totalItemCount / $pageSize),
                    )
                )
            )
        );

    }
}
