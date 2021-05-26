// form templates
const appFormTemplate = `
    <h5>Job</h5>
    <div class="form-group">
        <label for="status" class="form-label">Status</label>
        <input type="text" name="status" id="status">
    </div>
    <div class="form-group">
        <label for"position">Position</label>
        <input type="text" name="position" id="position">
    </div>
    <div class="form-group">
        <label for="url">Post URL</label>
        <input type="text" name="url" id="url">
    </div>
    <div class="form-group">
        <label for="core-skills">Core Skills</label>
        <input type="text" name="core-skills" id="core-skills">
    </div>
    <div class="form-group">  
        <label for="opt-skills">Optional Skills</label>
        <input type="text" name="opt-skills" id="opt-skills">
    </div>
    <div class="form-group">
        <label for="field">Field</label>
        <input type="text" name="field" id="field">
    </div>
`;

const companyFormTemplate = `
    <h5>Company</h5>
    <div class="form-group">
        <label for="company-name">Company Name</label>
        <input type="text" name="company-name" id="company-name">
    </div>
    <div class="form-group">
        <label for="company-url">Company Website URL</label>
        <input type="text" name="company-url" id="company-url">
    </div>
    <div class="form-group">
        <label for="about">About</label>
        <input type="text" name="about" id="about">
    </div>
    <div class="form-group">
        <label for="distance">Distance</label>
        <input type="text" name="distance" id="distance">
    </div>
    <div class="form-group">
        <label for="work-reviews">Workplace Reviews</label>
        <input type="text" name="work-reviews" id="work-reviews">
    </div>
`;

const contactFormTemplate = `
    <h5>Contacts</h5>
    <div class="form-group">
        <label for="contact-name">Full Name</label>
        <input type="text" name="contact-name" id="contact-name">
    </div>
    <div class="form-group">
        <label for="contact-title">Title</label>
        <input type="text" name="contact-title" id="contact-title">
    </div>
    <div class="form-group">
        <label for="contact-info">Contact Information</label>
        <input type="text" name="contact-info" id="contact-info">
        <label for="contact-type">Type</label>
        <input type="text" name="contact-type" id="contact-type">
    </div>
    <div class="form-group log-info">
        <label for="contact-log">Contact Log</label>
        <input type="text" name="contact-log" id="contact-log">
        <label for="log-date">Date</label>
        <input type="text" name="log-date" id="log-date">
        <button class="add-log" type="button">Add another log</button>
    </div>
`;
const contactFormTemplatePart = `
<div class="form-group">
        <label for="contact-name">Full Name</label>
        <input type="text" name="contact-name" id="contact-name">
    </div>
    <div class="form-group">
        <label for="contact-title">Title</label>
        <input type="text" name="contact-title" id="contact-title">
    </div>
    <div class="form-group">
        <label for="contact-info">Contact Information</label>
        <input type="text" name="contact-info" id="contact-info">
        <label for="contact-type">Type</label>
        <input type="text" name="contact-type" id="contact-type">
    </div>
    <div class="form-group log-info">
        <label for="contact-log">Contact Log</label>
        <input type="text" name="contact-log" id="contact-log">
        <label for="log-date">Date</label>
        <input type="text" name="log-date" id="log-date">
        <button class="add-log" type="button">Add another log</button>
    </div>
`;

const appViewTemplate = `
<div class="card">
    <h5>Job</h5>
    <div class="view-item">
        <h6>Status</h6>
    </div>
    <div class="view-item">
        <h6>Position</h6>
    </div>
    <div class="view-item">
        <h6>Post URL</h6>
    </div>
    <div class="view-item">
        <button>Company</button>
    </div>
    <div class="view-item">
        <button>Main Contact</button>
    </div>
    <div class="view-item">
        <button>View All Contacts</button>
    </div>
</div>
`;

const appDetailsTemplate = `
<div class="card">
    <h5>Job</h5>
    <div class="view-item">
        <h6>Status</h6>
    </div>
    <div class="view-item">
        <h6>Position</h6>
    </div>
    <div class="view-item">
        <h6>Post URL</h6>
    </div>
    <div class="view-item">
        <h6>Core Skills</h6>
    </div>
    <div class=""view-item">  
        <h6>Optional Skills<h6>
    </div>
    <div class="view-item">
        <h6>Field</h6>
    </div>
    <div class="view-item">
        <button><h6>Company</h6></button>
    </div>
    <div class="view-item">
        <h6>All App Contacts</h6>
        <p>Contacts List</p>
        <button>View More/Hide</button> 
    </div>
</div>
`;

const companyViewTemplate = `
<div class="card">
    <h5>Company</h5>
    <div class="view-item">
        <h6>Company Name</h6>
    </div>
    <div class="view-item">
        <h6>Company URL</h6>
    </div>
</div>
`;

const companyDetailsTemplate = `
<div class="card">
    <h5>Company</h5>
    <div class="view-item">
        <h6>Company Name</h6>
    </div>
    <div class="view-item">
        <h6>Company URL</h6>
    </div>
    <div class="view-item">
        <h6>About</h6>
    </div>
    <div class="view-item">
        <h6>Distance</h6>
    </div>
    <div class="view-item">
        <h6>Workplace Review</h6>
    </div>
    <div class="view-item">
        <h6>All Applications at Company</h6>
        <button>App Details</button>
    </div>
    <div class="view-item">
        <h6>All Contacts at Company</h6>
        <button>Contact Details</button>
    </div>  
</div>  
`;

const contactViewTemplate = `
<div class="card">
    <h5>Contact</h5>
    <div class="view-item">
        <h6>Full Name</h6>
    </div>
    <div class="view-item">
        <h6>Title</h6>
    </div>
    <div class="view-item">
        <button>Company</button>
    </div>
    <div class="view-item">
        <h6>Best Contact Method</h6>
    </div>
    <div class="view-item">
        <button>More Info</button>
    </div>
</div>
`;

const contactDetailsTemplate = `
<div class="card">
    <h5>Contact</h5>
    <div class="view-item">
        <h6>Full Name</h6>
    </div>
    <div class="view-item">
        <h6>Title</h6>
    </div>
    <div class="view-item">
        <h6>Primary Contact Info</h6>
    </div>
    <div class="view-item">
        <h6>More Info</h6>
        <button>More Info/Hide</button>
    </div>
    <div class="view-item">
        <h6>Company</h6>
        <button>View Company</button>
    </div>
    <div class="view-item">
        <h6>Contact Log</h6>
        <button>View more/hide</button>
    </div>
</div>
`;
