import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section class="trusted-marr">
          <div class="container">
            <div class="d-flex justify-content-end pt-3 py-4">
               {/* <p class="trusted-marr-completion-status">Great! You have completed <span>20%</span></p>  */}
            </div>
            <div class="row trusted-marr-row shadow-lg">
              <div class="col-md-6 trusted-marr-center ">
                <div class="content-wrapper my-5">
                  <div class="trusted-marr-card p-4">
                    <h5 class="connect-src">CONNECT TO A <span>DATA SOURCE</span></h5>
                    <form>
                      <div class="trusted-marr-form-group mb-4">
                        <label for="subcaste"><b>SOURCE</b></label>
                        <select class="form-control" id="subcaste">
                          <option>Select</option>
                          <option>Hard Drive (local)</option>
                          <option>Drive E</option>
                          <option>Drive F</option>
                          <option>Drive G</option>
                        </select>
                      </div>
                      <div class="trusted-marr-form-group mb-4">
                        <label for="password"><b>SELECT FILES</b></label>
                        <select class="form-control" id="subcaste">
                          <option>Select</option>
                          <option>Subcaste 1</option>
                          <option>Subcaste 2</option>
                        </select>
                      </div>

                      {/* <div class="trusted-marr-form-group mb-3">
                        <label for="motherTongue"><b>Select Files</b></label>
                        <select class="form-control" id="motherTongue">
                          <option>Select mother tongue</option>
                          <option>Language 1</option>
                          <option>Language 2</option>
                        </select>
                      </div> */}

                    <div class="trusted-marr-form-group mb-4">
                       {/* <label for="additionalInfo"><b>Enter Additional Information</b></label>  */}
                      <textarea class="form-control" id="additionalInfo" rows="4" placeholder=""></textarea>
                    </div>


                      <div class="buttons-container">

                      <a href="#" class="trusted-marr-btn-orange">SUBMIT</a>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-6 my-5">
                <div class="content-wrapper">
                  <div class="trusted-marr-card p-4">
                    <h5 class="connect-src">DOCUMET <span>CLASSIFICATION</span></h5>

                      <div class="trusted-marr-form-group mb-3">
                        <label for="dob"><b>PDF:</b></label>
                        <p>XXXXXXX</p>
                      </div>
                      <div class="trusted-marr-form-group mb-3">
                        <label for="dob"><b>EXCEL:</b></label>
                        <p>XXXXXXX</p>
                      </div>
                      <div class="trusted-marr-form-group mb-3">
                        <label for="dob"><b>WORD:</b></label>
                        <p>XXXXXXX</p>
                      </div>

                    <h5 class="connect-src">DOCUMET <span>CLASSIFICATION</span></h5>
                      <div class="trusted-marr-form-group mb-3">
                          <label for="dob"><b>HR:</b></label>
                          <p>XXXXXXX</p>
                        </div>
                        <div class="trusted-marr-form-group mb-3">
                          <label for="dob"><b>LEGAL:</b></label>
                          <p>XXXXXXX</p>
                        </div>
                        <div class="trusted-marr-form-group mb-3">
                          <label for="dob"><b>INVOICING:</b></label>
                          <p>XXXXXXX</p>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="trusted-marr">
        <div class="container">
        <div class="shadow p-3 mb-5 bg-white rounded">
        <div class="content-wrapper my-5">
                  <div class="trusted-marr-card p-4">
                    <h5 class="connect-src text-center">TASK <span>OBJECTIVE</span></h5>
                    <form>
                      <div class="trusted-marr-form-group mb-4">
                        <label for="subcaste"><b>TASKS</b></label>
                        <select class="form-control" id="subcaste">
                          <option>Select</option>
                          <option>Information Retrieval / Embeddings</option>
                          <option>Sentiment Analysis</option>
                          <option>NER / Entity Extraction</option>
                          <option>Summarization</option>
                          <option>Question Answering</option>
                          <option>Citation</option>
                          <option>Topic Modeling</option>
                        </select>
                      </div>
                    {/* <div class="trusted-marr-form-group mb-4">
                      <label for="additionalInfo"><b>Enter Additional Information</b></label>
                      <textarea class="form-control" id="additionalInfo" rows="4" placeholder=""></textarea>
                    </div> */}


                      <div class="buttons-container">

                      <a href="#" class="trusted-marr-btn-orange">SUBMIT</a>
                      </div>

                    </form>
                  </div>
                </div>
        </div>
        </div>
        </section>



      </header>
    </div>
  );
}

export default App;
